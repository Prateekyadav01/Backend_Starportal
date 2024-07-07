import amqp from 'amqplib'

let connection, channel;

const connectRabbitMQ = async () => {
  try {
    connection = await amqp.connect(process.env.RABBITMQ_URI);
    channel = await connection.createChannel();
    console.log('RabbitMQ connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = {
  connectRabbitMQ,
  getChannel: () => channel,
};
