$(function(){
    var PATTERN_CHECKBOX_ID = '[id^="check_"]'
    var EVENT_CHANGE = 'change'

    $('#checkAll').on(EVENT_CHANGE, function() {

        if (this.checked) {
            toggleCheckBox(PATTERN_CHECKBOX_ID, true)
        } else {
            toggleCheckBox(PATTERN_CHECKBOX_ID, false)
        }
    })

    $(PATTERN_CHECKBOX_ID).on(EVENT_CHANGE, function() {
        var checked = $(this).prop('checked')
        var tr = $(this).closest('tr')
        $(tr).find('[type="text"],select').prop('disabled', !checked)
    })

})

function toggleCheckBox (id, flag) {
    $(id).prop('checked', flag).change()
}
