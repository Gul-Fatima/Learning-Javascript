var arr = [
    {dp : "https://images.unsplash.com/photo-1737041315446-67303cd39ed9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDd8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D",story : "https://plus.unsplash.com/premium_photo-1681140029685-20ee2bd95b8b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8aG1lbnZRaFVteE18fGVufDB8fHx8fA%3D%3D"},
    {dp : "https://images.unsplash.com/photo-1736994390641-d19a77126c22?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDV8eEh4WVRNSExnT2N8fGVufDB8fHx8fA%3D%3D",story : "https://images.unsplash.com/photo-1611690132358-e493f29c6230?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8UzRNS0xBc0JCNzR8fGVufDB8fHx8fA%3D%3D"},
    {dp : "https://images.unsplash.com/photo-1557676715-93b39337b8ee?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fF9oYi1kbDRRLTRVfHxlbnwwfHx8fHw%3D", story: "https://images.unsplash.com/photo-1737113565824-edbbfb0077b8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDN8X2hiLWRsNFEtNFV8fGVufDB8fHx8fA%3D%3D"},
    {dp : "https://plus.unsplash.com/premium_vector-1736919089631-bde7ea727487?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwbHVzLWZlZWR8Nnx8fGVufDB8fHx8fA%3D%3D", story: "https://plus.unsplash.com/premium_photo-1720012745799-a2bca20df1cf?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwbHVzLWZlZWR8N3x8fGVufDB8fHx8fA%3D%3D"},
    {dp : "https://plus.unsplash.com/premium_photo-1734607187660-5d9dafc16982?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwbHVzLWZlZWR8MTB8fHxlbnwwfHx8fHw%3D", story: "https://plus.unsplash.com/premium_photo-1736517212441-dbd74c375caa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwbHVzLWZlZWR8MTN8fHxlbnwwfHx8fHw%3D"},
    {dp : "https://plus.unsplash.com/premium_photo-1732721750556-f5aef2460dfd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwbHVzLWZlZWR8MTd8fHxlbnwwfHx8fHw%3D", story: "https://plus.unsplash.com/premium_vector-1736953488714-73a1284d1a5d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwbHVzLWZlZWR8MjB8fHxlbnwwfHx8fHw%3D"}


]
var stories = document.querySelector('.stories')
var clutter = ""
arr.forEach(function(elem,idx){
    clutter += `<div class="story">
                <img id = '${idx}' src="${elem.dp}" alt="">
            </div>`
})
stories.innerHTML = clutter;
stories.addEventListener("click",function(dets){
    document.querySelector(".fullScreen").style.display = 'block'
    document.querySelector('.fullScreen').style.backgroundImage = `url(${arr[dets.target.id].story})`
    setTimeout(() => {
        document.querySelector(".fullScreen").style.display = 'none'

    }, 2000);
}) 
