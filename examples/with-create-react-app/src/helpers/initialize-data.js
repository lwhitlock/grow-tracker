function initializeData () {
  const category1Key = ref.child('categories').push().key;
  const category2Key = ref.child('categories').push().key;
  const category3Key = ref.child('categories').push().key;
  const category4Key = ref.child('categories').push().key;


  const strain1Key = ref.child('strains').push().key;
  const strain2Key = ref.child('strains').push().key;
  const strain3Key = ref.child('strains').push().key;
  const strain4Key = ref.child('strains').push().key;
  const strain5Key = ref.child('strains').push().key;
  const strain6Key = ref.child('strains').push().key;

  const category1 = {
    name: 'Indica',
  }
  const category2 = {
    name: 'Sativa',
  }
  const category3 = {
    name: 'Hybrid (Sativa Dominant)',
  }
  const category4 = {
    name: 'Hybrid (Indica Dominant)',
  }

  const strain1 = {
    name: 'Purple Haze',
    category:  category1Key,
    autoFlower: false,
    leafly: 'https://www.leafly.com/sativa/purple-haze',

  }
  const strain2 = {
    name: 'Super Silver Haze',
    category:  category1Key,
    autoFlower: false,
    leafly: 'https://www.leafly.com/sativa/super-silver-haze',
  }
  const strain3 = {
    name: 'Gold Leaf',
    category:  category4Key,
    autoFlower: false,
  }
  const strain4 = {
    name: 'Amnesia Haze',
    category:  category1Key,
    autoFlower: true,
    leafly: 'https://www.leafly.com/sativa/amnesia-haze',
  }
  const strain5 = {
    name: 'Blueberry',
    category:  category2Key,
    autoFlower: true,
    leafly: 'https://www.leafly.com/indica/blueberry',
  }
  const strain6 = {
    name: 'AK-47',
    category:  category3Key,
    autoFlower: true,
    leafly: 'https://www.leafly.com/hybrid/ak-47',
  }


  console.log(category1Key);
  console.log(category1);
  const newData = {
    ['categories/' + category1Key]: category1,
    ['categories/' + category2Key]: category2,
    ['categories/' + category3Key]: category3,
    ['categories/' + category4Key]: category4,
    ['strains/' + strain1Key]: strain1,
    ['strains/' + strain2Key]: strain2,
    ['strains/' + strain3Key]: strain3,
    ['strains/' + strain4Key]: strain4,
    ['strains/' + strain5Key]: strain5,
    ['strains/' + strain6Key]: strain6,
  }

  console.log(newData);

  ref.update(newData);
}
