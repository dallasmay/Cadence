require('dotenv').config();
const Sequelize = require('sequelize');
const {CONNECTION_STRING} = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
          rejectUnauthorized: false
      }
  }
});

module.exports = {
    seed: (req, res) => {sequelize.query(`
    DROP TABLE IF EXISTS famous_quotes;
    
    CREATE TABLE famous_quotes (
        quote_id SERIAL PRIMARY KEY,
        quote VARCHAR(2000) NOT NULL,
        speaker VARCHAR(200) NOT NULL,
        source VARCHAR(300),
        category VARCHAR(100)
    );

    INSERT INTO famous_quotes (quote, speaker, source, category)
    VALUES ('You must never give in to despair. Allow yourself to slip down that road, and you surrender to your lowest instincts. In the darkest times, hope is something you give yourself. That is the meaning of inner strength', 'Iroh', 'Avatar the Last Airbender', 'Inspirational'),
    ('Sometimes the best way to solve your own problems is to help someone else', 'Iroh', 'Avatar the Last Airbender', 'Inspirational'),
    ('You may not always see the light at the end of the tunnel, but if you keep moving, you will come to a better place', 'Iroh', 'Avatar the Last Airbender', 'Inspirational'),
    ('Pride is not the opposite of shame, but its source. True humility is the only antidote to shame', 'Iroh', 'Avatar the Last Airbender', 'Inspirational'),
    ('You have light and peace inside of you. If you let it out, you can change the world around you', 'Iroh', 'Avatar the Last Airbender', 'Inspirational'),
    ('Life happens wherever you are, whether you make it or not', 'Iroh', 'Avatar the Last Airbender', 'Inspirational'),
    ('While it is always best to believe in oneself, a little help from others can be a great blessing', 'Iroh', 'Avatar the Last Airbender', 'Inspirational'),
    ('Sometimes the best way to solve your own problems is to help someone else', 'Iroh', 'Avatar the Last Airbender', 'Inspirational'),
    ('If you look for the light, you can often find it. But if you look for the dark, that is all you will ever see', 'Iroh', 'Avatar the Last Airbender', 'Inspirational'),
    ('The greatest illusion of this world is the illusion of separation. Things you think are separate and different are actually one and the same. We are all one people, but we live as if divided', 'Guru Pathik', 'Avatar the Last Airbender', 'Inspirational'),
    ('When we hit our lowest point, we are open to the greatest change', 'Aang', 'Avatar the Last Airbender', 'Inspirational'),
    ('I don''t care what I look like. I''m not looking for anyone''s approval. I know who I am', 'Toph', 'Avatar the Last Airbender', 'Inspirational'),
    ('Happiness can be found, even in the darkest of times, if one only remembers to turn on the light', 'Albus Dumbledore', 'Harry Potter', 'Inspirational'),
    ('It is our choices that show what we truly are, far more than our abilities', 'Albus Dumbledore', 'Harry Potter', 'Inspirational'),
    ('Words are, in my not-so-humble opinion, our most inexhaustible source of magic. Capable of both inflicting injury, and remedying it', 'Albus Dumbledore', 'Harry Potter', 'Inspirational'),
    ('It takes a great deal of bravery to stand up to your enemies, but a great deal more to stand up to your friends', 'Albus Dumbledore', 'Harry Potter', 'Inspirational'),
    ('We are only as strong as we are united, as weak as we are divided', 'Albus Dumbledore', 'Harry Potter', 'Inspirational'),
    ('It does not do to dwell on dreams and forget to live', 'Albus Dumbledore', 'Harry Potter', 'Inspirational'),
    ('The truth. It is a beautiful and terrible thing, and should therefore be treated with great caution', 'Albus Dumbledore', 'Harry Potter', 'Inspirational'),
    ('It matters not what someone is born but what they grow to be', 'Albus Dumbledore', 'Harry Potter', 'Inspirational'),
    ('We must all face the choice between what is right and what is easy', 'Albus Dumbledore', 'Harry Potter', 'Inspirational'),
    ('Indifference and neglect often do much more damage than outright dislike', 'Albus Dumbledore', 'Harry Potter', 'Inspirational'),
    ('Do not pity the dead. Pity the living, and above all, those who live without love', 'Albus Dumbledore', 'Harry Potter', 'Inspirational'),
    ('It is a curious thing, but perhaps those who are best suited to power are those who have never sought it', 'Albus Dumbledore', 'Harry Potter', 'Inspirational');

`
    ).then(() => {
        console.log('Database seeded!')
        res.sendStatus(200)
    }).catch(err => console.log('error seeding DB', err))
    },
    getFamousQuote: (req, res) => {
        sequelize.query(`SELECT * FROM famous_quotes
                        ORDER BY RANDOM()
                        LIMIT 1;`
        ).then((dbRes) => {
            res.status(200).send(dbRes[0][0]);
        })
    },
    postMyQuote: (req, res) => {
        const { quote, speaker } = req.body
        sequelize.query(`INSERT INTO test_user (quote, speaker)
                        VALUES ($$${quote}$$, $$${speaker}$$);`
            ).then(() => {
            res.status(200).send()
        })
    }

}
