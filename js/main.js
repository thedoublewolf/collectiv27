// Make sure shim jQuery first
import $ from 'jquery';
import 'bootstrap-sass';

$(window).resize(function() {

  let windowWidth = $(window).width();

  if (windowWidth < 1000) {
    $('#project-image').removeClass('project-image').addClass('project-image-re');
    $('#project-desc').removeClass('project-desc').addClass('project-desc-re');
    $('#contact-cards').removeClass('contact-cards').addClass('contact-cards-re');
    $('#single-card').removeClass('hidden-card').addClass('shown-card');
  } else if (windowWidth >= 1000) {
    $('#project-image').removeClass('project-image-re').addClass('project-image');
    $('#project-desc').removeClass('project-desc-re').addClass('project-desc');
    $('#contact-cards').removeClass('contact-cards-re').addClass('contact-cards');
  }
  console.log(windowWidth);
});

let windowWidth = $(window).width();

if (windowWidth < 1000) {
  $('#project-image').removeClass('project-image').addClass('project-image-re');
  $('#project-desc').removeClass('project-desc').addClass('project-desc-re');
  $('#contact-cards').removeClass('contact-cards').addClass('contact-cards-re');
  $('#single-card').removeClass('hidden-card').addClass('shown-card');
} else if (windowWidth >= 1000) {
  $('#project-image').removeClass('project-image-re').addClass('project-image');
  $('#project-desc').removeClass('project-desc-re').addClass('project-desc');
  $('#contact-cards').removeClass('contact-cards-re').addClass('contact-cards');
}