let remarks_area = document.querySelector('#display');
let algo_select = document.getElementsByName('select');
let submit_btn = document.getElementById('visualize_btn');

function show_remark() {
    remarks_area.style.opacity = "1";
    remarks_area.style.maxHeight = "100px";
    remarks_area.style.overflow = "visible";
    remarks_area.style.transition = "0.5s ease-in-out";
    remarks_area.style.transform = "scale(1)";
}

function clearcontent(ele_id) {

    document.getElementById(ele_id).innerHTML = "";
}

function submit_click() {
    clearcontent("display");
    if (!(algo_select[0].checked) && !(algo_select[1].checked)) {
        remarks_area.innerHTML = " Please select atleast one algorithm!! ";
        show_remark();
        return;
    }
    if (algo_select[0].checked) {
        let search_type = document.getElementsByName('search_type');
        for (var i = 0; i < search_type.length; i++) {
            if (search_type[i].checked)
                break;
        }
        if (i==1) {
            remarks_area.innerHTML = "You selected Binary Search!!!";
            binary_search();
        }
        else if(i==0) {
            remarks_area.innerHTML = "You selected Linear Search!!!";
            document.getElementById('info').style.display  = "block";
            linear_search();
        }
        else{
            remarks_area.innerHTML ="Please select atleast one Search Algoritm!!"
        }

        show_remark();
    }
    if (algo_select[1].checked) {
        let sort_type = document.getElementsByName('sort_type');
        for (var i = 0; i < sort_type.length; i++) {
            if (sort_type[i].checked)
                break;
        }
        if (i == 0) {
            remarks_area.innerHTML = "You selected Bubble Sort!!!";
            document.getElementById('info').style.display  = "block";
            console.log('Bubble Sort called');
            bubble_sort();
        }
        else if (i == 1) {
            remarks_area.innerHTML = "You selected Insertion Sort!!!";
            insertion_sort();
        }
        else if (i == 2) {
            remarks_area.innerHTML = "You selected Selection Sort!!!";
            selection_sort();
        }
        else if(i==3) {
            remarks_area.innerHTML = "You selected Merge Sort!!!";
            merge_sort();
        }
        else{
            remarks_area.innerHTML = "Please select atleast one Sort Algorithm!!"
        }

        show_remark();
    }
}


const throttle = (fn,limit) =>{
    let flag  = true;
    return function()
    {
        if(flag)
        {
            fn();
            flag = false;
            setTimeout(()=>{
                flag = true;
            },limit);
        }
    }
}

const better_submit_click = throttle(submit_click,10000);

submit_btn.addEventListener("click" , better_submit_click)



