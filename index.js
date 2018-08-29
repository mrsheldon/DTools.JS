const snekfetch = require('snekfetch');

class DTOOLS {
    constructor(client) {
        if (client) {
            this.client = client;
        }
    }
    request(method, endpoint, data, auth) {
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
        if (!date) return console.log("Error: No date specified")
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days
    }
    async dblPostStats(token, servercount) {
        if (!token && !servercount) throw new Error('dblPostStats requires 2 argument');
        if (!token) return console.log("Error: No token specified");
        if (!servercount) return console.log("Error: No server count specified");
        const data = {};
        if (servercount) {
            data.server_count = servercount;
        } else {
            data.server_count = this.client.guilds.size;
        }
        const response = await this.request('post', `https://discordbots.org/api/bots/${this.client.user.id}/stats`, data, token);
        return response.body;
    }
    async bfdPostStats(token, servercount) {
        if (!token && !servercount) throw new Error('bfdPostStats requires 2 argument');
        if (!token) return console.log("Error: No token specified");
        if (!servercount) return console.log("Error: No server count specified");
        const data = {};
        if (servercount) {
            data.count = servercount;
        } else {
            data.count = this.client.guilds.size;
        }
        const response = await this.request('post', `https://botsfordiscord.com/api/v1/bots/${this.client.user.id}`, data, token);
        return response.body;
    }
    async bdpPostStats(token, servercount) {
        if (!token && !servercount) throw new Error('bdpPostStats requires 2 argument');
        if (!token) return console.log("Error: No token specified");
        if (!servercount) return console.log("Error: No server count specified");
        const data = {};
        if (servercount) {
            data.server_count = servercount;
        } else {
            data.server_count = this.client.guilds.size;
        }
        const response = await this.request('post', `https://bots.discord.pw/api/bots/${this.client.user.id}/stats`, data, token);
        return response.body;
    }
}

module.exports = DTOOLS;