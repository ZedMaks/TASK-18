$('.spoiler').hide();


const onClickHandler = (e) => {
  if(event.target.id === "first"){
    $('.first_spoiler').slideToggle(700);
  } else{
    $('.second_spoiler').slideToggle(700);
  }
}

$('.first_button').on('click',onClickHandler);
$('.second_button').on('click',onClickHandler);



