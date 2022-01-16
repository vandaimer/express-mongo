# Express + MongoDB

Retrieve deliveries by:

- startDate
- endDate
- minCount
- maxCount

---

# Install locally

- Using `node v17.3.0+`
- Run `yarn` `// to install the dependencies`
- Set `MONGO_URI` enviroment var
    - `export MONGO_URI=your_mongo_db_uri`
- Run `yarn dev`
    - Execute the application during the development process
- Run `yarn test`
    - Run the unit tests
- Run `yarn coverage`
    - Run the unit tests and generate a report o test coverage

---

## Deployment on Production via Heroku

After the usual Heroku setup (login), you just need to type:

```bash
git push heroku master
```

---

# Endpoints

- `GET http://localhost:3000/healthz`
- `POST http://localhost:3000/api/delivery`
    - payload:
    ```json
        {
        "startDate": "2016-01-26",
        "endDate": "2016-04-19",
        "minCount": "2700",
        "maxCount": "3000"
        }
    ```

---

# Next steps
- Install [Eslint](https://eslint.org/)
- Install [Pretteir](https://prettier.io/)
- Configure [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)
- Add hook for `git push` command
    - To avoid send code with breaking tests
    - To accomplish that, you can install [Husky](https://www.npmjs.com/package/husky)
- Validate startDate & endDate
    - endDate should be greater than startDate
- Improve the test coverage
