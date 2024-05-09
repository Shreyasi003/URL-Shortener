let btn = document.getElementById("shorten");

btn.addEventListener('click', short);


async function short(){
    let longURL = document.getElementById("longurl").value;
    let shortURL = document.getElementById("shorturl");

    const result = await fetch(`https://tinyurl.com/api-create.php?url=${longURL}`);
    // const data = await result.json();

    shortURL.value = await result.text();

    console.log(result)
}