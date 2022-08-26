# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "open-uri"

User.delete_all
Film.delete_all
Review.delete_all
Like.delete_all
Log.delete_all

#Users
demoUser = User.create!(username: 'torbtheorb', password: 'convent1909', email: 'tginsberg8@gmail.com')
user1 = User.create!(username: 'gretaG', password: 'francesha', email: 'noah@baumbach.com')
user2 = User.create!(username: 'TSwinton', password: 'michaelclayton', email: 'tswinton@memoria.com')
user3 = User.create!(username: 'marty', password: 'scorsese', email: 'good@fellas.com')
user4 = User.create!(username: 'denisV', password: 'arrival', email: 'dune@arrakis.com')
user5 = User.create!(username: 'KingLeo', password: 'dicaprio', email: 'jack@rose.com')
user6 = User.create!(username: 'florenceP', password: 'midsommar', email: 'black@widow.com')
user7 = User.create!(username: 'lupita', password: 'nyongo1', email: 'us@blackpanther.com')
user8 = User.create!(username: 'Oscar', password: 'Isaac3', email: 'card@counter.com')

#Film.create!(title:, year: integer, length: str, director_name, summary)
#film1.poster.attach(io: File.open('/torbenginsberg/Desktop/fullstack/film_posters/Sicario.jpeg'), file_name: 'Sicario.jpeg')

walle = Film.create!(title: "WALL-E", year: 2008, length: '98 mins', director_name: 'Andrew Stanton', summary: 'WALL-E is the last robot left on an Earth that has been overrun with garbage and all humans have fled to outer space. When a ship arrives with a sleek new type of robot, WALL-E thinks he has finally found a friend.')
walle.poster.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/walle_poster.png'), filename: 'walle_poster.png')
walle.backdrop.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/walle_backdrop.png'), filename: 'walle_backdrop.png')

sicario = Film.create!(title: "Sicario", year: 2015, length: '122 mins', director_name: 'Denis Villeneuve', summary: 'An idealistic FBI agent is enlisted by a government task force to aid in the escalating war against drugs at the border area between the U.S. and Mexico.')
sicario.poster.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/Sicario.jpeg'), filename: 'Sicario.jpeg')
sicario.backdrop.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/Sicario_Backdrop.jpeg'), filename: 'Sicario_Backdrop.jpeg')

raiders = Film.create!(title: "Raiders of the Lost Ark", year: 1981, length: '115 mins', director_name: 'Steven Spielberg', summary: 'When Dr. Indiana Jones - the tweed-suited professor who just happens to be a celebrated archaeologist - is hired by the government to locate the legendary Ark of the Covenant, he finds himself up against the entire Nazi regime.')
raiders.poster.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/raiders_poster.png'), filename: 'raiders_poster.png')
raiders.backdrop.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/raiders_backdrop.png'), filename: 'raiders_backdrop.png')

mononoke = Film.create!(title: "Princess Mononoke", year: 1997, length: '134 mins', director_name: 'Hayao Miyazaki', summary: 'Ashitaka, a prince of the disappearing Emishi people, is cursed by a demonized boar god and must journey to the west to find a cure. Along the way, he encounters San, a young human woman fighting to protect the forest, and Lady Eboshi, who is trying to destroy it. Ashitaka must find a way to bring balance to this conflict.')
mononoke.poster.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/mononoke_poster.png'), filename: 'mononoke_poster.png')
mononoke.backdrop.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/mononoke_backdrop.png'), filename: 'mononoke_backdrop.png')

bueller = Film.create!(title: "Ferris Bueller's Day Off", year: 1986, length: '109 mins', director_name: 'John Hughes', summary: 'After high school slacker Ferris Bueller successfully fakes an illness in order to skip school for the day, he goes on a series of adventures throughout Chicago with his girlfriend Sloane and best friend Cameron, all the while trying to outwit his wily school principal and fed-up sister.')
bueller.poster.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/bueller_poster.png'), filename: 'bueller_poster.png')
bueller.backdrop.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/bueller_backdrop.png'), filename: 'bueller_backdrop.png')

francesha = Film.create!(title: "Frances Ha", year: 2012, length: '86 mins', director_name: 'Noah Baumbach', summary: 'An aspiring dancer moves to New York City and becomes caught up in a whirlwind of flighty fair-weather friends, diminishing fortunes and career setbacks.')
francesha.poster.attach(io: open('/Users/torbenginsberg/Desktop/fullstack/film_posters/francesha_poster.png'), filename: 'francesha_poster.png')
francesha.backdrop.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/francesha_backdrop.png'), filename: 'francesha_backdrop.png')

whiplash = Film.create!(title: "Whiplash", year: 2014, length: '107 mins', director_name: 'Damien Chazelle', summary: 'Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.')
whiplash.poster.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/francesha_poster.png'), filename: 'whiplash_poster.png')
whiplash.backdrop.attach(io: open('/Users/torbenginsberg/Desktop/fullstack/film_backdrops/whiplash_backdrop.png'), filename: 'whiplash_backdrop.png')

inbruges = Film.create!(title: "In Bruges", year: 2008, length: '108 mins', director_name: 'Martin McDonagh', summary: 'Ray and Ken, two hit men, are in Bruges, Belgium, waiting for their next mission. While they are there they have time to think and discuss their previous assignment. When the mission is revealed to Ken, it is not what he expected.')
inbruges.poster.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/inbruges_poster.png'), filename: 'inbruges_poster.png')
inbruges.backdrop.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/inbruges_backdrop.png'), filename: 'inbruges_backdrop.png')

dunkirk = Film.create!(title: "Dunkirk", year: 2017, length: '107 mins', director_name: 'Christopher Nolan', summary: 'The story of the miraculous evacuation of Allied soldiers from Belgium, Britain, Canada and France, who were cut off and surrounded by the German army from the beaches and harbour of Dunkirk between May 26th and June 4th 1940 during World War II.')
dunkirk.poster.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/dunkirk_poster.png'), filename: 'dunkirk_poster.png')
dunkirk.backdrop.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/dunkirk_backdrop.png'), filename: 'dunkirk_backdrop.png')

boogie = Film.create!(title: "Boogie Nights", year: 1997, length: '156 mins', director_name: 'Paul Thomas Anderson', summary: 'Set in 1977, back when sex was safe, pleasure was a business and business was booming, idealistic porn producer Jack Horner aspires to elevate his craft to an art form. Horner discovers Eddie Adams, a hot young talent working as a busboy in a nightclub, and welcomes him into the extended family of movie-makers, misfits and hangers-on that are always around.')
boogie.poster.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/boogie_poster.png'), filename: 'boogie_poster.png')
boogie.backdrop.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/boogie_backdrop.png'), filename: 'boogie_backdrop.png')

halloween = Film.create!(title: "Halloween", year: 1978, length: '91 mins', director_name: 'John Carpenter', summary: 'Fifteen years after murdering his sister on Halloween Night 1963, Michael Myers escapes from a mental hospital and returns to the small town of Haddonfield, Illinois to kill again.')
halloween.poster.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/halloween_poster.png'), filename: 'halloween_poster.png')
halloween.backdrop.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/halloween_backdrop.png'), filename: 'halloween_backdrop.png')

social = Film.create!(title: "The Social Network", year: 2010, length: '121 mins', director_name: 'David Fincher', summary: 'On a fall night in 2003, Harvard undergrad and computer programming genius Mark Zuckerberg sits down at his computer and heatedly begins working on a new idea. In a fury of blogging and programming, what begins in his dorm room as a small site among friends soon becomes a global social network and a revolution in communication.')
social.poster.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/social_poster.png'), filename: 'social_poster.png')
social.backdrop.attach(io: open('https://cineboxd-seed-photos.s3.amazonaws.com/social_backdrop.png'), filename: 'social_backdrop.png')



