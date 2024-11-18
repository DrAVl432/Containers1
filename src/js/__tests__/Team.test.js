import Team from '../Team';

test('should add character to team', () => {
    const team = new Team();
    const character = { name: 'Warrior' };
    team.add(character);

    expect(team.toArray()).toEqual([character]);
});

test('should throw error when adding duplicate character', () => {
    const team = new Team();
    const character = { name: 'Warrior' };
    team.add(character);

    expect(() => team.add(character)).toThrow('Персонаж уже добавлен в команду.');
});

test('should add multiple characters to team', () => {
    const team = new Team();
    const character1 = { name: 'Warrior' };
    const character2 = { name: 'Mage' };

    team.addAll(character1, character2);
    expect(team.toArray()).toEqual([character1, character2]);
});

test('should convert set to array', () => {
    const team = new Team();
    const character = { name: 'Warrior' };

    team.add(character);
    const teamArray = team.toArray();

    expect(Array.isArray(teamArray)).toBe(true);
    expect(teamArray).toEqual([character]);
});