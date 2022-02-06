import useForm from './useForm'

type PasswordParameters = 'length'

export default function usePassword() {
  const [ parameters, setEntry ] = useForm<PasswordParameters>({ length: 20 })

  function generator() {
    return generatePassword(parameters)
  }

  return [ setEntry, generator ] as const
}

const lowercaseDictionary = 'abcdefghijklmnopqrstuvwxyz'

function generatePassword(parameters:Record<PasswordParameters, string|number>) {
  let password = ''

  for(let i = 0; i < parameters.length; i++) {
    const index = Math.floor(Math.random() * lowercaseDictionary.length)
    password += lowercaseDictionary[index]
  }

  return password
}
