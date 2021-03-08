 $(document).ready(function () {
     /*---mobile navbar---*/

    $('.sidenav').sidenav();

    /*---id year for 'Copyright' in <footer>---*/
    
    $("#year").html(new Date().getFullYear());

    /*---option select in form---*/

    $('select').formSelect();

    /*---date picker---*/

    $(".datepicker").datepicker({
        format: "dd mmmm, yyyy",
        yearRange: 3,
        showClearBtn: true,
        i18n: {
            done: "Select"
        }
    });

 });


 $(".add-ingredient").on("click", function () {
        addIngredient($(this).parent(".new-ingredient"));
    });

    /*---add (ingredient+directions) and remove (ingredient+direction) function has been inspired from Tim Nelsone's 2BN-Desserts website---*/

    function addIngredient(thisObj) {
        // 'destroy' is required to clone <select> elements
        $("select").formSelect("destroy");
        // clone and remove existing values
        $(".new-ingredient:first").clone(true, true).insertAfter(thisObj).find("input[type='text'], select, textarea").val("").addClass("invalid");
        $("select").formSelect();
        ingredientCount += 1;
        // custom Materialize validation (not built-in natively)
        let thisMeasurement = thisObj.closest("div").find(".dropdown-trigger").dropdown();
        let classInvalid = {"border-bottom": "1px solid #f44336", "box-shadow": "0 1px 0 0 #f44336"};
        let classValid = {"border-bottom": "1px solid #4caf50", "box-shadow": "0 1px 0 0 #4caf50"};
        if ($(thisMeasurement).val() != "unit of measurement") {
            $(thisMeasurement).css(classValid);
        } else {
            $(thisMeasurement).css(classInvalid);
        }
        thisObj.closest("div").find("input").focus();
        thisObj.next("div").find(".dropdown-trigger").dropdown().css(classInvalid);
        disableRemoveIngredient();
        validateMaterializeSelect();
        thisObj.next("div").find("input:first").focus();
        // end custom validation
    }
    // delete selected 'ingredient'
    $(".remove-ingredient").on("click", function () {
        removeIngredient($(this).parent(".new-ingredient"));
    });
    function removeIngredient(thisObj) {
        $(thisObj).remove();
        ingredientCount -= 1;
        disableRemoveIngredient();
    }
    // disable 'remove-ingredient' if only one ingredient exists
    let ingredientCount = $(".ingredient").length;
    disableRemoveIngredient();
    function disableRemoveIngredient() {
        if (ingredientCount === 1) {
            $("button.remove-ingredient").prop("disabled", true);
        } else {
            $("button.remove-ingredient").prop("disabled", false);
        }
    }

    
    /*
    ---------------------------------------------------------
        Clone a new 'Direction' line on user-click event
    ---------------------------------------------------------
    */
    // add new cloned 'direction'
    $(".add-direction").on("click", function () {
        addDirection($(this).parent(".new-direction"));
    });
    function addDirection(thisObj) {
        // clone and remove existing values
        $(".new-direction:first").clone(true, true).insertAfter(thisObj).find("textarea").val("");
        directionCount += 1;
        // custom Materialize validation (not built-in natively)
        thisObj.closest("div").find("textarea").focus();
        disableRemoveDirection();
        validateMaterializeSelect();
        thisObj.next("div").find("textarea").focus();
        // end custom validation
    }
    // delete selected 'direction'
    $(".remove-direction").on("click", function () {
        removeDirection($(this).parent(".new-direction"));
    });
    function removeDirection(thisObj) {
        $(thisObj).remove();
        directionCount -= 1;
        disableRemoveDirection();
    }
    // disable 'remove-direction' if only one direction exists
    let directionCount = $(".direction").length;
    disableRemoveDirection();
    function disableRemoveDirection() {
        if (directionCount === 1) {
            $("button.remove-direction").prop("disabled", true);
        } else {
            $("button.remove-direction").prop("disabled", false);
        }
    }


    /*
    -----------------------------------------------------------------------
        Mark ingredients / directions as 'Complete' on user-click event
    -----------------------------------------------------------------------
    */
    // ingredients
    $(".ingredient-item").on("click", function () {
        $(this).children("i").toggleClass("fa-circle fa-check-circle green-text");
        $(this).closest("li").find("span").toggleClass("grey-text strike");
    });
    // directions
    $(".direction-item").on("click", function () {
        $(this).toggleClass("grey-text strike completed");
    });



