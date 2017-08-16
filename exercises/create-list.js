/*
    ЗАДАНИЕ: Напишите функцию `createList`, которая возвращает объект,
    с методами для работы со списоком.
    Функция принимает 1 аргумент - начальное значение для списка (массив).
    Если значение не передано, то используется значение по умолчанию ([]).
    
    У возвращаемого объекта должны быть следующие методы:
        * getLength() - возвращает длину списка
        * add(item) - добавляет элемент в список
        * get(index) - возвращает элемент по указанному индексу
        * set(index, item) - обновляет элемент по указанному индексу
        * remove(item) - удаляет элемент из списка
        * toString() - возращает список в виде строки

    ПРИМЕР:

    let list = createList(['a', 'b', 'c']);

    list.toString(); // 'a,b,c'
    list.getLength(); // 3

    list.add('d');
    list.toString(); // 'a,b,c,d'

    list.get(3); // 'd'

    list.set(3, 'z');
    list.get(3); // 'z'
    list.toString(); // 'a,b,c,z'

    list.remove('a');
    list.toString(); // 'b,c,z'
*/

function createList() {
    
}

module.exports = createList;