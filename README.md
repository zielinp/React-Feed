# React-Feed

> Aplikacja, która przy scrollowaniu w dół pokazuje na stronie kolejne posty pobierane z zasobów API.

## Instalacja potrzebnych pakietów

W terminalu należy przejść do ścieżki ../React-Feed/react-feed

1. Instalacja niezbędnych pakietów

```bash
yarn install
```

2. Instalcja JSON server

```bash
npm install -g json-server
```

## Uruchomienie

1. W terminalu należy przejść do ścieżki ../React-Feed/react-feed

2. W drugim kroku należy uruchomić lokalnie JSON server na porcie 3001 na jednym terminalu (Więcej informacji: https://github.com/typicode/json-server)

```bash
json-server --watch db.json --port 3001
```

3. Następnie na drugim terminalu równolegle należy uruchomić projekt aplikacji w React na porcie 3000 (domyślny port)

```bash
yarn start
```

## Contact

Created by [@zielinp](https://www.linkedin.com/in/zielinp/) - feel free to contact me!
