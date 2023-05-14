let i = 0
const api = "https://api.imgflip.com/get_memes"

async function getCh(name) {
    const content = document.querySelector("#content")
    const response = await fetch(`${api}?name=${name}`)
    const data = await response.json();
    const memess = data.data.memes
    content.innerHTML += `

<h3   class="underline decoration-indigo-500 text-rose-950 font-black"> ${[i+1]} </h3>

          <h5 class="text-white w-2/3 float-right  font-black h-15 underline decoration-wavy flex justify-center shadow-2xl capitalize hyphens-manual rounded  ">My name is ${memess[i].name}    ( My ID is ${memess[i].id})</h5>
      <img      class="text-white cursor-wait rounded-full w-80 h-80 shadow-2xl w-1/3 bg-origin-content p-4 border-4 border-dashed "src="${memess[i].url}"   alt="..." />
        <hr  class="drop-shadow-2xl  text-fuchsia-500  mb-5 mx-15 before:content-['2023/5/14'] rounded-full underline decoration-wavy border-double border-4 border-indigo-600 "/>
    `
    i++

    //

    document.getElementById("button").addEventListener("click", function() {
        if (i + 1 >= memess.length) {
            this.style.display = ("none");
        } else {
            this.style.display = ("block");

        }


    })

    // content.classList.add("grid grid-cols-3 gap-4 place-items-center h-56 ");
    content.classList.add("place-content-center ");
    // content.classList.add("place-content-center");
}