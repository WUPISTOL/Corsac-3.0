const Discord = require("discord.js");
exports.run = (client, message, args) => {
  message.channel.send({
    data: {
        //adds the embed here, so the button and embed will be sent together
        embeds: {
    title: 'some title',
    description: 'some description',
  },
        components: [
            {
                type: 1,
                components: [
                    {
                        type: 2,
                        style: 1,
                        label: "Apply",
                        // Our button id, we can use that later to identify,
                        // that the user has clicked this specific button
                        custom_id: "send_application"
                    }
                ]
            }
        ],
    }
});
}
module.exports.help = {
  name: "calc"
}
