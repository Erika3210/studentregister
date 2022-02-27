namea= [];
function submit()
{
    var name_1 = document.getElementById("name_of_the_student_1").value
    var name_2 = document.getElementById("name_of_the_student_2").value
    var name_3 = document.getElementById("name_of_the_student_3").value
    var name_4 = document.getElementById("name_of_the_student_4").value
    
    namea.push(name_1);
    namea.push(name_2);
    namea.push(name_3);
    namea.push(name_4);

    document.getElementById("display_name").innerHTML = namea;
    document.getElementById("submit_button").style.display = "none";
    document.getElementById("sort_button").style.display = "inline-block";

}
function sorting()
{
    namea.sort();
    document.getElementById("display_name").innerHTML = namea;
}
