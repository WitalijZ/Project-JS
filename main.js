

let audi = {
    marka: 'Audi',
    model: 'A6',
    price: 50000,
    rocznik: 2018,
    moc: 280,
    przebieg: 120000, 
    
}

let mercedes = {
    marka: 'Mercedes-Benz',
    model: 'W123',
    price: 150000,
    rocznik: 1976,
    moc: 90,
    przebieg: 1000000, 
    
}
let bmw = {
    marka: 'BMW+',
    model: 530,
    price: 80000,
    rocznik: 2018,
    moc: 240,
    przebieg: 86000, 
    
}

localStorage.setItem('audi', JSON.stringify(audi));
localStorage.setItem('mercedes', JSON.stringify(mercedes));
localStorage.setItem('bmw', JSON.stringify(bmw));

console.log( JSON.parse(localStorage.getItem('bmw')).model );

// localStorage.clear();