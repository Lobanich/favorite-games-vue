const { createApp } = Vue;

createApp({
    // @todo используй setup-функцию вместо data https://vuejs.org/guide/introduction.html
    data() {
        return {
            // @todo для вычисления жанров используй computed https://vuejs.org/guide/essentials/computed.html
            genres: ["Action", "RPG", "Strategy"],
            // @todo перепиши все данные на такую же структуру, как была в прошлой репе
            games: {
                Action: [
                    { title: "DOOM", description: "Классический шутер от первого лица" },
                    { title: "Half-Life 2", description: "Революционный шутер с захватывающим сюжетом" },
                    { title: "Uncharted 4", description: "Приключенческий экшн с потрясающей графикой и сюжетом" },
                    { title: "Call of Duty", description: "Популярная военная игра" },
                    { title: "GTA V", description: "Игра с открытым миром и захватывающим сюжетом" },
                    { title: "Red Dead Redemption 2", description: "Приключенческий экшн в открытом мире" }
                ],
                RPG: [
                    { title: "The Witcher 3", description: "Эпическая RPG с открытым миром" },
                    { title: "Mass Effect 2", description: "Научно-фантастическая RPG с захватывающим сюжетом" },
                    { title: "Skyrim", description: "Легендарная RPG с открытым миром" },
                    { title: "Dragon Age: Inquisition", description: "Фэнтезийная RPG с увлекательной историей" },
                    { title: "Cyberpunk 2077", description: "Futuristic RPG with open world" },
                    { title: "Divinity: Original Sin 2", description: "Классическая RPG с пошаговыми боями" }
                ],
                Strategy: [
                    { title: "StarCraft", description: "Культовая стратегия в реальном времени" },
                    { title: "Civilization VI", description: "Глобальная пошаговая стратегия" },
                    { title: "Age of Empires II", description: "Классическая стратегия в реальном времени" },
                    { title: "Command & Conquer", description: "Культовая стратегическая игра" },
                    { title: "Total War: Three Kingdoms", description: "Стратегия в реальном времени и пошаговая" },
                    { title: "Warcraft III", description: "Классическая стратегия в реальном времени" }
                ]
            }
        };
    }
}).mount('#app');
