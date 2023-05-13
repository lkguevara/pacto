// Sumas para las cards del dashboard (página inicio)
const cardsData = {
    sumSalesToday: 283547000,
    sumActiveProducts: 11702,
    sumActiveUsers: 19598,
}

// La suma de las ventas diarias de los últimos 7 días
const barChartData = [
    {
        day: "Lun",
        sumInMillions: 150,
    },
    {
        day: "Mar",
        sumInMillions: 89,
    },
    {
        day: "Mié",
        sumInMillions: 159,
    },
    {
        day: "Jue",
        sumInMillions: 175,
    },
    {
        day: "Vie",
        sumInMillions: 157,
    },
    {
        day: "Sáb",
        sumInMillions: 172,
    },
    {
        day: "Dom",
        sumInMillions: 174,
    },
];

// Lista con las ventas de las últimas 24 horas, ordenadas por fecha de compra, de las más recientes a las más antiguas
const recentOrders = [
    {
        _id: 20,
        name: "Juan Perez",
        total: 789500,
        date: "2023-05-12T11:15:54.000Z",
    },
    {
        _id: 19,
        name: "María López",
        total: 7525840,
        date: "2023-05-12T11:08:54.000Z",
    },
    {
        _id: 18,
        name: "Ángela Rodríguez",
        total: 5320500,
        date: "2023-05-12T10:52:54.000Z",
    },
    {
        _id: 17,
        name: "Carlos Gómez",
        total: 10547000,
        date: "2023-05-12T10:08:54.000Z",
    },
    {
        _id: 16,
        name: "Diego Soria",
        total: 985500,
        date: "2023-05-12T08:17:54.000Z",
    },
    {
        _id: 15,
        name: "Soledad Ramírez",	
        total: 2684840,
        date: "2023-05-12T07:24:54.000Z",
    },
    {
        _id: 14,
        name: "Rodrigo Pérez",
        total: 4630500,
        date: "2023-05-12T06:33:54.000Z",
    },
    {
        _id: 13,
        name: "Romina Alvarado",
        total: 985000,
        date: "2023-05-12T04:45:54.000Z",
    },
    {
        _id: 12,
        name: "Agustina Alvez",
        total: 850600,
        date: "2023-05-12T02:19:54.000Z",
    },
    {
        _id: 11,
        name: "Lorenzo Benítez",
        total: 1780500,
        date: "2023-05-12T01:24:54.000Z",
    },
    {
        _id: 10,
        name: "María López",
        total: 7525840,
        date: "2023-05-12T00:47:54.000Z",
    },
    {
        _id: 9,
        name: "Ángela Rodríguez",
        total: 5320500,
        date: "2023-05-11T23:30:54.000Z",
    },
    {
        _id: 8,
        name: "Carlos Gómez",
        total: 10547000,
        date: "2023-05-11T23:08:54.000Z",
    },
    {
        _id: 7,
        name: "Diego Soria",
        total: 985500,
        date: "2023-05-11T22:11:54.000Z",
    },
    {   
        _id: 6,
        name: "Soledad Ramírez",
        total: 2684840,
        date: "2023-05-11T20:58:54.000Z",
    },  
    {
        _id: 5,
        name: "Rodrigo Pérez",
        total: 4630500,
        date: "2023-05-11T20:33:54.000Z",
    },
    {
        _id: 4,
        name: "Romina Alvarado",
        total: 985000,
        date: "2023-05-11T20:32:54.000Z",
    },
    {
         _id: 3,
        name: "Agustina Alvez",
        total: 850600,
        date: "2023-05-11T19:54:54.000Z",
    },
    {
        _id: 2,
        name: "Lorenzo Benítez",
        total: 1780500,
        date: "2023-05-11T19:34:54.000Z",
    },
    {
        _id: 1,
        name: "María López",
        total: 7525840,
        date: "2023-05-11T19:20:54.000Z",
    }
];

module.exports = {
    cardsData,
    barChartData,
    recentOrders,
};