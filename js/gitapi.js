
async function getData(){
    const res=await fetch('https://api.github.com/users/selmanfariz18')
    const data=await res.json()

    const card5 =document.getElementById('stat1')
    const name =document.createElement('h3')
    name.textContent=data.name

    card5.appendChild(name)

    const repo=await fetch('https://api.github.com/users/selmanfariz18/repos')
    const data1=await repo.json()
    console.log(data1)
    const card =document.getElementById('stat2')
    const repo_name =document.createElement('h3')
    repo_name.textContent= data1.length
    card.appendChild(repo_name)

    const folo=await fetch('https://api.github.com/users/selmanfariz18/followers')
    const data2=await folo.json()

    const card2 =document.getElementById('stat3')
    const folo_name =document.createElement('h3')
    folo_name.textContent= data2.length

    card2.appendChild(folo_name)

    const folow=await fetch('https://api.github.com/users/selmanfariz18/following')
    const data3=await folow.json()

    const card3 =document.getElementById('stat4')
    const folow_name =document.createElement('h3')
    folow_name.textContent= data3.length

    card3.appendChild(folow_name)

    const org=await fetch('https://api.github.com/users/selmanfariz18/orgs')
    const data4=await org.json()

    const card4 =document.getElementById('stat5')
    const org_name =document.createElement('h3')
    org_name.textContent= data4.length

    card4.appendChild(org_name)

}
getData();    