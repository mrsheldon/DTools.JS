const snekfetch = require('snekfetch');

class DTOOLS {
    constructor(client) {
        if (client) {
            this.client = client;
        }
    }
    request(method, endpoint, data, auth) {
        if (!method && !endpoint) throw new Error('dblPostStats requires at least 2 argument');
        if (!method) throw new Error("No method specified");
        if (!endpoint) throw new Error("No endpoint specified");
        const request = snekfetch[method](endpoint);
        if (method === 'post' && data) request.send(data);
        if (method === 'get' && data) request.query(data);
        if (auth) request.set({
            Authorization: auth
        });
        return request;
    }
    async ping() {
        return console.log("Pong");
    }
    async getDays(date) {
        if (!date) throw new Error("No date specified")
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days
    }
    async dblPostStats(id, token, servercount) {
        if (!id && !token && !servercount) throw new Error('dblPostStats requires 3 argument');
        if (!id) throw new Error("No id specified");
        if (!token) throw new Error("No token specified");
        if (!servercount) throw new Error("No server count specified");
        const data = {};
        if (servercount) {
            data.server_count = servercount;
        } else {
            data.server_count = this.client.guilds.size;
        }
        const response = await this.request('post', `https://discordbots.org/api/bots/${id}/stats`, data, token);
        return response.body;
    }
    async bfdPostStats(id, token, servercount) {
        if (!id && !token && !servercount) throw new Error('bfdPostStats requires 3 argument');
        if (!id) throw new Error("No id specified");
        if (!token) throw new Error("No token specified");
        if (!servercount) throw new Error("No server count specified");
        const data = {};
        if (servercount) {
            data.count = servercount;
        } else {
            data.count = this.client.guilds.size;
        }
        const response = await this.request('post', `https://botsfordiscord.com/api/v1/bots/${id}`, data, token);
        return response.body;
    }
    async bdpPostStats(id, token, servercount) {
        if (!id && !token && !servercount) throw new Error('bdpPostStats requires 3 argument');
        if (!id) throw new Error("No id specified");
        if (!token) throw new Error("No token specified");
        if (!servercount) throw new Error("No server count specified");
        const data = {};
        if (servercount) {
            data.server_count = servercount;
        } else {
            data.server_count = this.client.guilds.size;
        }
        const response = await this.request('post', `https://bots.discord.pw/api/bots/${id}/stats`, data, token);
        return response.body;
    }
    async dbgPostStats(id, token, servercount) {
        if (!id && !token && !servercount) throw new Error('bdpPostStats requires 3 argument');
        if (!id) throw new Error("No id specified");
        if (!token) throw new Error("No token specified");
        if (!servercount) throw new Error("No server count specified");
        const data = {};
        if (servercount) {
            data.count = servercount;
        } else {
            data.count = this.client.guilds.size;
        }
        const response = await this.request('post', `https://discordbots.group/api/bot/${id}`, data, token);
        return response.body;
    }
    async dbwPostStats(id, token, servercount) {
        if (!id && !token && !servercount) throw new Error('bdpPostStats requires 3 argument');
        if (!id) throw new Error("No id specified");
        if (!token) throw new Error("No token specified");
        if (!servercount) throw new Error("No server count specified");
        const data = {};
        if (servercount) {
            data.guild_count = servercount;
        } else {
            data.guild_count = this.client.guilds.size;
        }
        const response = await this.request('post', `https://discordbot.world/api/bot/${id}/stats`, data, token);
        return response.body;
    }
    async blsPostStats(id, token, servercount) {
        if (!id && !token && !servercount) throw new Error('bdpPostStats requires 3 argument');
        if (!id) throw new Error("No id specified");
        if (!token) throw new Error("No token specified");
        if (!servercount) throw new Error("No server count specified");
        const data = {};
        if (servercount) {
            data.server_count = servercount;
        } else {
            data.server_count = this.client.guilds.size;
        }
        const response = await this.request('post', `https://botlist.space/api/bots/${id}`, data, token);
        return response.body;
    }
}

module.exports = DTOOLS;