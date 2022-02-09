import useForm from './useForm'
import { PasswordOptions } from '@Types'

type OptionsDictionary<T> = {
  [key in keyof PasswordOptions]: T
}

type PasswordParameters = PasswordOptions & {
  length: number
}

export default function usePassword() {
  const [ parameters, setEntry ] = useForm<PasswordParameters>({
    length: 20,
    uppercase: false,
    lowercase: true,
    numbers: false,
    symbols: false
  })

  function generator():string {
    return generatePassword(parameters)
  }

  return [ setEntry, generator ] as const
}

const dictionaries:OptionsDictionary<string> = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '|\'¿´+{}<,.-°!"#$%&/()=?¡¨*[]>;:_¬@·½\\¸~^`'
}

function generatePassword({ length, ...options }:PasswordParameters):string {
  const password:string[] = []

  // 1 - Set default proportion of each option to 0
  const proportions = {} as OptionsDictionary<number>

  for(const option in options) {
    proportions[option as keyof PasswordOptions] = 0
  }

  // 2 - Now, we assing a random proportion if it the option is enabled
  for(const option in options) {
    if(options[option as keyof PasswordOptions]) {
      proportions[option as keyof PasswordOptions] = Math.random() + 0.5
    }
  }

  // 3 - We rewrite the proportion values based on the total
  const totalProportion = Object.values(proportions).reduce((p, v) => p + v, 0)

  for(const option in proportions) {
    proportions[option as keyof PasswordOptions] = Math.round(length * proportions[option as keyof PasswordOptions] / totalProportion)
  }

  // 4 - For each option, add random characters from its dictionary to the password
  for(let option in proportions) {
    const dictionary = dictionaries[option as keyof PasswordOptions]
    const dictionaryLength = proportions[option as keyof PasswordOptions]

    for(let i = 0; i < dictionaryLength; i++) {
      const index = Math.floor(Math.random() * dictionary.length)

      password.push(dictionary.charAt(index))
    }
  }

  // 5 - Finally, shuffle the password and return it
  for(let i = 0; i < password.length; i++) {
    let index1 = Math.floor(Math.random() * password.length);
    let index2 = Math.floor(Math.random() * password.length);

    [password[index1], password[index2]] = [password[index2], password[index1]]
  }

  return password.join('')
}
