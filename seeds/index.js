const sequelize = require('../config/connection'); 
const seedUsers = require('./user-seeds'); 
const seedPosts = require('./post-seeds');

async function seedDatabase() {
  try {
    console.log('Syncing database...');
    await sequelize.sync({ force: true });

    console.log('Seeding users...');
    await seedUsers();

    console.log('Seeding posts...');
    await seedPosts();

    console.log('Seeding complete!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error);
    process.exit(1);
  }
}

seedDatabase();
