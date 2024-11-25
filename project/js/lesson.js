const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabs = document.querySelectorAll('.tab_content_item');
const tabsParent = document.querySelector('.tab_content_items')

let currentTab =0

const hideTabContent = () => {
    tabContentBlocks.forEach((block)=> {
        block.style.display = 'none'
    })
    tabs.forEach((tab) => {
        tab.classList.remove('tab_content_item_active')
})
}
const showTabContent = (id = 0) => {
    tabContentBlocks[id].style.display = 'block'; 
    tabs[id].classList.add('tab_content_item_active');
};

const switchTab = () => {
    hideTabContent()
    currentTab = (currentTab +1) % tabs.length
    showTabContent(currentTab)
}

hideTabContent();
showTabContent();
setInterval(switchTab,3000)

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab,tabIndex) => {
           if(event.target===tab) {
            hideTabContent()
            currentTab= tabIndex
            showTabContent(tabIndex)
           }
        })
    }
}



// const usdInput =() => {
//     const request = new XMLHttpRequest()
//     request.open('GET', '..//data/converter.json')
//     request.setRequestHeader ('Content_type','application/json')
//     request.send()
// }
// request onlaod = () => {
//     const date = JSON.parse(request.response)
//     if
// }


//switcher 6
// const nextButton= document.querySelector('#btn-next')
// const prevButton= document.querySelector('#btn-prev')
// const cardButton= document.querySelector('.card')
