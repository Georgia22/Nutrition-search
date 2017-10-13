/* global $ */
$(document).ready(function() {
    var getNutrition = document.getElementById("js-search");
    getNutrition.onclick = function() {
        var item = document.getElementById("js-input").value;
        $.ajax({
            url: "https://api.nutritionix.com/v1_1/search/" + item + "?fields=item_name%2Citem_id%2Cbrand_name%2Cnf_calories%2Cnf_total_fat&appId=0d1c8f0d&appKey=5ce73a519bfeccde726139b55ffea4b7",
            method: "GET",
        }).then(function(response){
            console.log(response);
            nutritionInfoDisplay(response.hits[0]);
        });
            
        //get nutrition info
        function nutritionInfoDisplay(item) {
            console.log(item);
            var itemInfo = item.fields;
            var resultItems = document.getElementsByClassName("itemBar");
            var itemName = document.getElementById("itemName");
            itemName.innerHTML = itemInfo.item_name;

            var calories = document.getElementById("calories");
            calories.innerHTML = "Calories: " + itemInfo.nf_calories;

            var servingSize = document.getElementById("servingSize");
            servingSize.innerHTML = "Serving size: " + itemInfo.nf_serving_size_qty + " " + itemInfo.nf_serving_size_unit;

            var totalFat = document.getElementById("totalFat");
            totalFat.innerHTML = "Total fat: " + itemInfo.nf_total_fat;

            $(".results").append(resultItems);
            
            document.getElementById("searchForm").reset();
        }
        
        $("#searchForm").submit(function(i) {
            i.preventDefault();
        });
    };
});
