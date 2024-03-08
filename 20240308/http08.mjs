import http from "http";



const server = http.createServer((request, response) => {

    response.setHeader("content-type", "text/html;charset=utf-8")
    response.end(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <style>
            .row{
                display: flex;
                width: 180px;
                background-color: pink;
                &:nth-child(odd){ 
                    /* 相間變色 */
                    background-color: orange;
                }
                .col{
                    width: 60px;
                    height: 30px;
                    display: grid;
                    place-items: center;
                    cursor: pointer;   /* 變手指 */
                    user-select: none;  /* 不能選取反白 */
                    &.active{
                        background-color: purple;
                        color: white;
                    }
                    &.active:nth-child(odd){
                        background-color: rgb(228, 21, 228);
                        color: #fff;
                    }
                }
            }
        </style>
    </head>
    <body>
        <div class="row">
            <div class="col">1-1</div>
            <div class="col">1-2</div>
            <div class="col">1-3</div>
        </div>
        <div class="row">
            <div class="col">2-1</div>
            <div class="col">2-2</div>
            <div class="col">2-3</div>
        </div>
        <div class="row">
            <div class="col">3-1</div>
            <div class="col">3-2</div>
            <div class="col">3-3</div>
        </div>
        <div class="row">
            <div class="col">4-1</div>
            <div class="col">4-2</div>
            <div class="col">4-3</div>
        </div>
        <script>
            const cols =document.querySelectorAll(".col")
            // Array.from(cols).map()
            // [...cols].map()
            cols.forEach((col)=>{
                col.addEventListener("click", function(){
                    this.classList.add("active");
                })
            });
    
        </script>
    </body>
    </html>`);
})

server.listen(9000, () => {
    console.log("伺服器已啟動於 http://localhost:9000");
}
)
