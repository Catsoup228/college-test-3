export default function solution(content) {
  // BEGIN
  //console.log(content)
  const lines = content.trim().split('\n').slice(2)
  //console.log(`Всего растений: ${lines.length}`)
  const data = lines.map((line) => line.split('|').filter((line) => line).map((line => line.trim())))
  //console.log(data)
  const names = data.map((line => line[0]))
  const sortedNames = names.map((name) => name[0].toUpperCase() + name.slice(1)).sort()
  //console.log(sortedNames)
  const plants = data.map((line) => line[4])
  const poison = plants.filter((poison) => poison === 'Да').length
  const safe = plants.filter((poison) => poison === 'Нет').length
  //console.log(`Всего ядовитых: ${(100/data.length)*poison}%\nВсего неядовитых: ${(100/data.length)*safe}%`)
  const forestPlants = data.filter(line => line[1].split(',')[0] === 'Леса')
  const years = (year) => {
    if(year.includes('-')) {
      return (Number(year.split('-')[0]) + Number(year.split('-')[1].split(' ')[0])) / 2
    } return Number(year.split(' ')[0])
   }
   const age = forestPlants.map(plant => years(plant[3]))
   const totalage = age.reduce((acc,el) => acc + el)
   console.log(`Средний возраст для всех лесных растений: ${Math.floor(totalage / age.length)} лет`)
  
  // END
}
