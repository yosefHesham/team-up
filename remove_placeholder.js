function remove_placeholder() {
    skills_length = document.getElementsByTagName("li").length;
    skills_input = document.getElementById("question-input-101");

    if (skills_length === 1)
        skills_input.placeholder = "Space separated";
    else
        skills_input.placeholder = "";

}