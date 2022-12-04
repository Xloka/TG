# tg 

```
docker build -t ct3a-docker --build-arg NEXT_PUBLIC_CLIENTVAR=clientvar .
docker run -p 3000:3000 -e DATABASE_URL="database_url_goes_here" ct3a-docker
```
or

```
docker compose up
```

### Deploy

```
railway login
railway init
railway link
railway up
railway open
```

or

```
npm i -g vercel
vercel
vercel --env DATABASE_URL=YOUR_DATABASE_URL_HERE --yes
vercel --prod
```

