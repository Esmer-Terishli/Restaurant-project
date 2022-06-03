$(document).ready(function () {
  $('#drink').on('click', function () {
    $('#modal0').modal(1000);
  })
  $('#sea').on('click', function () {
    $('#modal1').modal(1000);
  })
  $('#coffee').on('click', function () {
    $('#modal2').modal(1000);
  })
  $('#meat').on('click', function () {
    $('#modal3').modal(1000);
  })
  $('.button-x').on('click', function () {
    $('#modal0').hide();
  })
  $('#birthday').on('click', function () {
    $('#modal4').modal(1000);
  })
  $('#business').on('click', function () {
    $('#modal5').modal(1000);
  })
  $('#wedding').on('click', function () {
    $('#modal6').modal(1000);
  })


  $('.button1').on('click', function () {
    $('#modalok').show(1000);
  })
  $('.button2').on('click', function () {
    $('#modalok').hide();
  })
  $('.button-m').on('click', function () {
    $('#modalok').show(1000);
  })
  $('.button-r').on('click', function () {
    $('#melumat').show(1000);
  })
  $('#button21').on('click', function () {
    $('.cedvel').append('<tr><td>3</td><td>' + $('#name').val() + '</td><td>' + $('#phone').val() + '</td><td>' + $('#datesel').val() + '</td><td>' + $('#monthsel').val() + '</td><td>' + $('#timesel').val() + '</td><td>' + $('#personsel').val() + '</td></tr>')
  })

  $('.button2').on('click', function () {
    $('#melumat').hide();
  })
})


const imgArr = ["https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8YnJlYWtmYXN0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyZWFrZmFzdHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1527515862127-a4fc05baf7a5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bHVuY2h8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1569398696722-46dd48e851b1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGx1bmNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1595023027074-2cf05c6a4c45?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
  "https://images.unsplash.com/photo-1543340713-1bf56d3d1b68?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZGlubmVyJTIwYmFja2dyb3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1543992321-cefacfc2322e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlubmVyJTIwYmFja2dyb3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1599974609677-a1d2b484de77?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGlubmVyJTIwYmFja2dyb3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1495808921907-1599ab4d6801?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1953&q=80",
  "https://images.unsplash.com/photo-1485265449635-ca623a55e95c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDB8fGRyaW5rc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1584225064785-c62a8b43d148?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjZ8fGRyaW5rc3xlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1582461833047-2aeb4f8af173?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVzc2VydHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1560269507-68b9732d35c5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZGVzc2VydHN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1509474520651-53cf6a80536f?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGRlc3NlcnRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"]

let menuElement = document.querySelector(".menu")
console.log(menuElement)
let allData = []
fetch('https://629996907b866a90ec3e363f.mockapi.io/food').then(res => res.json()).then(data => data.slice(0, 15).map((item, index) => {
  console.log(data);

  let base = document.createElement('div');
  base.setAttribute('class', 'single-menu');

  let elemImg = document.createElement('img');
  elemImg.setAttribute('src', `${imgArr[index]}`);

  let menuContent = document.createElement('div');
  menuContent.setAttribute('class', 'menu-content');

  let h4 = document.createElement('h4');
  h4.innerText = `${item.name}`;
  let span = document.createElement('span');
  span.innerText = `${item.price} $`;
  let p = document.createElement('p');
  p.innerText = `${item.description}`;

  h4.append(span);
  menuContent.append(h4);
  menuContent.append(p);

  base.append(elemImg)
  base.append(menuContent)
  menuElement.append(base)
}))
