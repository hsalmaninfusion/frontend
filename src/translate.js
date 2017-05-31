export default translateConfig;

//in real case we would get that from a service
var translationsEn = {
  OpenChequingAccount: 'Open a chequing account',
  OpenSavingsAccount: 'Open a savings account',
  OpenUSDollarAccount: 'Open a U.S. Dollar account',
  ReviewMyNeeds: 'Review my everyday banking needs every day here',
  SwichtoTD: 'Switch to TD',
  OverdraftProtection: 'Apply for Overdraft Protection'
};


var translationsFr = {
  OpenChequingAccount: 'Ouvrir un compte chequing',
  OpenSavingsAccount: 'Ouvrir un compte d épargne',
  OpenUSDollarAccount: 'Ouvrir un compte en dollars des États-Unis',
  ReviewMyNeeds: 'Examinez mes besoins bancaires quotidiens',
  SwichtoTD: 'Basculer vers TD',
  OverdraftProtection: 'ADemande de protection contre le découvert'
};

function  translateConfig($translateProvider) {
  // add translation table
  $translateProvider.translations('en', translationsEn);
  $translateProvider.translations('fr', translationsFr);
  $translateProvider.preferredLanguage('en');
}

