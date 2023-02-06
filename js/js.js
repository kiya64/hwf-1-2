let sumluffy = 0;
let sumace = 0;
let sumlevi = 0;
let price_post = 0;

function AddItem(sumluffy, sumace, sumlevi, price_post) {

    let sumItem = 0;
    let totalItem = 0;

    sumItem = sumluffy + sumace + sumlevi;
    totalItem = sumluffy + sumace + sumlevi + price_post;

    $("#item").html(sumItem);
    $("#total").html(totalItem);

}
$("#form1").change(function() {

    let count1 = $("#form1").val();
    let price1 = $("#price1").text();
    sumluffy = count1 * price1;

    return AddItem(sumluffy, sumace, sumlevi, price_post);

});

$("#form2").change(function() {

    let count2 = $("#form2").val();
    let price2 = $("#price2").text();
    sumace = count2 * price2;

    return AddItem(sumluffy, sumace, sumlevi, price_post);

});
$("#form3").change(function() {

    let count3 = $("#form3").val();
    let price3 = $("#price3").text();
    sumlevi = count3 * price3;

    return AddItem(sumluffy, sumace, sumlevi, price_post);

});


$('#sel').change(function() {
    price_post = Number(this.value);
    return AddItem(sumluffy, sumace, sumlevi, price_post);
});