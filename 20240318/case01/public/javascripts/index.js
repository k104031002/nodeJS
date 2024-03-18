const btnPrevDate = document.querySelector(".btn-prevDate");
const btnNextDate = document.querySelector(".btn-nextDate");
const btnAddShow = document.querySelector(".btn-addShow");
const myDate = document.querySelector(".myDate");

const bsOffCavas = new bootstrap.Offcanvas("#inputArea");
const newSet = document.querySelector(".newSet");
const updateSet = document.querySelector(".updateSet");

myDate.addEventListener("change", (e) => {
    let date = e.currentTarget.value;
    window.location.href = `/expe/d/${date}`;
})

btnPrevDate.addEventListener("click", (e) => {
    let date = new Date(myDate.value);
    date.setDate(date.getDate() - 1)
    const dateString = date.toISOString().split("T")[0];
    window.location.href = `/expe/d/${dateString}`;
})

btnNextDate.addEventListener("click", (e) => {
    let date = new Date(myDate.value);
    date.setDate(date.getDate() + 1)
    const dateString = date.toISOString().split("T")[0];
    window.location.href = `/expe/d/${dateString}`;
})

btnAddShow.addEventListener("click", (e) => {
    document.querySelector("input[name=title]").value = "";
    document.querySelector("input[name=money]").value = "";
    document.querySelector("input[name=id]").value = "";
    document.querySelector("select").selectedIndex = 0;
    newSet.classList.remove("d-none");
    newSet.classList.add("d-flex");
    updateSet.classList.add("d-none");
    updateSet.classList.remove("d-flex");
    bsOffCavas.show();

})