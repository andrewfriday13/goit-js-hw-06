const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
  
];

const gallery = document.querySelector('.gallery');

const img = images.map(({ url, alt }) => {
  const list = document.createElement('li')
  const newImg = document.createElement('img')
   newImg.alt = alt
  newImg.src = url  
  newImg.width = 300
  list.append(newImg)
  console.log(list)
  // const listImg = gallery.insertAdjacentHTML("beforebegin", `<li><img class="animal__img" src="${url}" alt="${alt}" width= 300> </li> `)
  
  return list
})
gallery.append(...img)


// const newImg = document.createElement("img")
  // newImg.alt = alt
  // newImg.src = url  
  // newImg.width =300


  // listImg.appendChild(newImg)

  // gallery.appendChild(listImg) 