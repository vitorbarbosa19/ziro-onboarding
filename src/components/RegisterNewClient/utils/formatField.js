// finds and replaces all characters with latin accents using unicode
const formatField = (fieldName) => {
	const noAccent = fieldName.toLowerCase().replace(/[\u00C0-\u00FF]/g, (char) => {
  	const unicode = char.charCodeAt(0).toString(16)
	  if (/[ce][0-3]/.test(unicode))
	    return 'a'
	  if (/[ce][89a]/.test(unicode))
	    return 'e'
	  if (/[ce][cde]/.test(unicode))
	    return 'i'
	  if (/[df][2-5]/.test(unicode))
	    return 'o'
	  if (/[df][9ab]/.test(unicode))
	    return 'u'
	  if (/[ce]7/.test(unicode))
	    return 'c'
	})
	const camelCaseNoAccent = noAccent.replace('-','').split(' ').map( (word, index) => {
	  if (index === 0)
	    return word
	  return word.split('').map( (char, index) => {
	    if (index === 0)
	      return char.toUpperCase()
	    return char
	  }).join('')
	}).join('')
	return camelCaseNoAccent
}

export default formatField
