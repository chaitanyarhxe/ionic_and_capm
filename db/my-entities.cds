namespace my.capm;

entity SalesOrders {
    key id           : Integer;
        customer     : String;
        netAmount    : Integer;
        status       : String;
        creationDate : Date
}

entity ToDos {
    key id       : Integer;
        title    : String;
        subtitle : String;
        place    : String;
}