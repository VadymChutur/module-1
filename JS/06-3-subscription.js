const subscription = 'pro';

const canAccessContent = subscription === 'pro' || subscription === 'vip';
console.log('Чи є доступ до контента:', canAccessContent);
