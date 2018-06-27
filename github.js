class Github {
  constructor() {
    this.client_id = '71139bbfc6e123f5e388';
    this.client_secret = '32955c13201cf60a35231c334106937ff58529e6';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
  
    const profileData = await profileResponse.json();

    return {
      profile: profileData
    }
  
  }

  async getRepos(user) {
    const reposResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}/repos`);
  
    const reposData = await reposResponse.json();

    return {
      repos: reposData
    }
  
  }
}