const loadPhone = async (searchText='13', isShowAll) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
  const data = await res.json();
  const phones = data.data;
  // console.log(phone);
  displayPhones(phones, isShowAll);
};

const displayPhones = (phones, isShowAll) => {
  // console.log(phones)
  // step-1: 
  const phoneContainer = document.getElementById('phone-container');
  // clear phone container cards befor adding new cards
  phoneContainer.textContent = '';
  // or--- phoneContainer.innerHTML = '';


  // console.log(phones.length)

  // display show all button if there are mone than 12 phones
  const showAllContainer = document.getElementById('show-all-container');
  if(phones.length > 12 && !isShowAll){
    showAllContainer.classList.remove('hidden');
  }else{
    showAllContainer.classList.add('hidden');
  }
  // console.log('is show all', isShowAll)
  // display only first 12 phones
  if(!isShowAll){
    phones = phones.slice(0, 12);
  }

  phones.forEach((phone) => {
    // console.log(phone);
    // step-2: create a div
    const phoneCard = document.createElement("div");
    phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
    // step-3: set inner html
    phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name
            }</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-center">
            <button onclick="handleShowDetail('${phone.slug}')" class="btn btn-primary">Show Details</button>
            </div>
        </div>
        `;
        // step-4: append child
        phoneContainer.appendChild(phoneCard);
  });
  // hide loading spinner
  toggleLoadingSpinner(false)
};


const handleShowDetail = async (id) =>{
  console.log('click show detailes', id)
  // load single phone data
  const res = await fetch(`https://openapi.programming-hero.com/api/phone/${id}`);
  const data = await res.json();
  // console.log(data);
  const phone = data.data;
  showPhoneDetails(phone);
}

// show the modal
const showPhoneDetails = (phone) =>{
  console.log(phone)
  const phoneName = document.getElementById('show-detail-phone-name');

  phoneName.innerText = phone.name;
  const showDetailContainer = document.getElementById('show-detail-container');
  showDetailContainer.innerHTML =`
    <img src="${phone.image}" alt=''/>
    <p><span>Storage</span>${phone?.mainFeatures?.storage}</p>
    <p><span>Storage</span>${phone?.others?.GPS}</p>
  `
  show_details_modal.showModal()
}

// handle search button

const handleSearch = (isShowAll) => {
    // console.log('clicked')
    toggleLoadingSpinner(true);
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText, isShowAll);
}
// toggle loading or spinner
const toggleLoadingSpinner = (isLoading) =>{
  const loadingSpinner = document.getElementById('loading-spinner');
  if(isLoading){
    loadingSpinner.classList.remove('hidden')
  }
  else{
    loadingSpinner.classList.add('hidden')
  }
}
// handle show all
const handleShowAll = () =>{
  handleSearch(true)
}

loadPhone();
