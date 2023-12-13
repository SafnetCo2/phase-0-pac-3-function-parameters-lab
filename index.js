function introduction(name){
    return `Hi, my name is ${name}.`
}
introduction('Josephine');

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`


}
introductionWithLanguage('Josephine')
function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
   }
introductionWithLanguageOptional('Josephine')
introductionWithLanguageOptional('JavaScript')