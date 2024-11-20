# Frontend Assignment 2024

## О сборке

Сборка основана на стнадртном [шаблоне](<https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts>) React + TypeScript + Vite.

## Установка

Вам понадобится установленный Node.js: 20 или выше.

1. Для установки зависимостей выполните команду

    ```bash
    npm install
    ```

2. Для старта локального сервера выполните команду

    ```bash
    npm run dev
    ```

## Структура проекта

|Директория|Описание|
|-|-|
|**src/components**|Компоненты, которые импортируются в приложение.
|**src/assets/css**|Cтили, все они импортируются через index.css.|
|**src/assets/img**|Изображения.|
|**src/interfaces**|Типы, которые используются по всему приложению.|

## Тестирование

Для запуска через терминал `npm run {command}`
|Команда|Описание|
|-|-|
|**lint**|Запускает eslint|

## О приложении

Простое приложения для ведения списка задач. Можно добавлять и удалять задачи из списка


## Что можно улучшить

* Добавить возможность отмечать задачи как выполненные

* Настроить хранение в LocalStorage
