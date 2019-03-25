{
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! The latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms.`);
  }
