Subscription.delete_all
Subscription.reset_pk_sequence
Post.delete_all
Post.reset_pk_sequence
Group.delete_all
Group.reset_pk_sequence
Message.delete_all
Message.reset_pk_sequence
Match.delete_all
Match.reset_pk_sequence
User.delete_all
User.reset_pk_sequence

puts "Deleting and Resetting Seeds"

puts "Seeding User Data"
User.create(first_name: "Casie", last_name: "Smith", username: "cassmith", password: "1234", email: "casieeffert@gmail.com", phone_number: "(919)-232-6412", profile_picture: "https://howtodrawforkids.com/wp-content/uploads/2022/07/6-stick-figure-drawing-lesson.jpg", birthday: "4/17/97", pronouns: "She/her")
User.create(first_name: "Jeremey", last_name: "Hansen", username: "jermwerm", password: "1234", email: "jeremey@gmail.com", phone_number: "(919)-422-1234", profile_picture: "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/222212770_10220987379294256_8588249282589399139_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=22zzXW6pWqAAX8H1YEi&_nc_ht=scontent-atl3-1.xx&oh=00_AfBW2WyY3OKqzT2Ln_bnAWJVfZmk-K4mTyGyG4FXtpzF8g&oe=637041AC", birthday: "6/19/86", pronouns: "He/him")

puts "Seeding Group Data"
Group.create(name: "EDM", description: "All things EDM", genre: "Electronic Dance Music", profile_picture: "https://st2.depositphotos.com/2927537/7025/i/600/depositphotos_70253417-stock-photo-funny-monkey-with-a-red.jpg")

puts "Seeding Subscription Data"
Subscription.create(group_id: 1, user_id: 1)

puts "Seeding Match Data"
Match.create(user_id: 1, friend_id: 2)
Match.create(user_id: 2, friend_id: 1)


puts "Seeding Message Data"
Message.create(message: "Hi, how are you?", friend_id: 2, user_id: 1)

puts "Seeding Post Data"
Post.create(post: "Yo, listen to this song! url...", saves: 0, likes: 1, user_id: 1, group_id: 1)
