using my.capm as my from '../db/my-entities';

service DataService {
    entity SalesOrders @readonly as projection on my.SalesOrders;
    entity ToDos @readonly       as projection on my.ToDos;
}