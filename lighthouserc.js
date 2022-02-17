module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:4200/'],
      startServerCommand: 'npm run start:shell:production',
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
