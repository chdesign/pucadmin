/* global $ */
/* global GOVUK */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  // Use GOV.UK shim-links-with-button-role.js to trigger a link styled to look like a button,
  // with role="button" when the space key is pressed.
  GOVUK.shimLinksWithButtonRole.init()

  // Details/summary polyfill from frontend toolkit
  GOVUK.details.init()

  // Show and hide toggled content
  // Where .multiple-choice uses the data-target attribute
  // to toggle hidden content
  var showHideContent = new GOVUK.ShowHideContent()
  showHideContent.init()
})



$(document).on('click', '.admin-submenu a', function(e) {
  e.preventDefault();

  var nth = $(this).parent().index() + 1;
  var target = $(this).parents('.admin-submenu-container').find('.admin-pane:nth-child(' + nth + ')');

  $(this).parents('.admin-submenu-container').find('.active').removeClass('active');
  $(this).parent().addClass('active');

  $(this).parents('.admin-submenu-container').find('.admin-panes').children().hide();
  $(this).parents('.admin-submenu-container').find('h1').text($(this).text());
  target.show();
});
$('.admin-submenu a').first().click();
