import React, { useState } from 'react';
import { Check, Plus, X, Menu, MoreVertical } from '@tamagui/lucide-icons';
import { Button, Checkbox, Input, Text, XStack, YStack } from 'tamagui';
import BackButton from '../../components/BackButton';

const initialTasks = [{ id: 1, title: 'Welcome to simple tasks', done: true }];

export default function SimpleTodoScreen() {
  const [tasks, setTasks] = useState(initialTasks);
  const [newTask, setNewTask] = useState('');

  const toggleTask = (id: number) => {
    setTasks(tasks.map(t => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { id: Date.now(), title: newTask, done: false }]);
    setNewTask('');
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <XStack style={{ flex: 1 }}>
      <YStack flex={1} bg="$purple10">
        <XStack padding="$4" alignItems="center" position="relative">
          <BackButton color="white" />
          <Text
            position="absolute"
            left={0}
            right={0}
            textAlign="center"
            color="white"
            fontSize="$6"
            fontWeight="700"
          >
            Simple To-Do
          </Text>
        </XStack>
        <YStack
          margin="$4"
          padding="$4"
          borderRadius="$6"
          bg="white"
          space="$3"
          elevation="$2"
        >
          {tasks.map(task => (
            <XStack
              key={task.id}
              alignItems="center"
              justifyContent="space-between"
              paddingVertical="$2"
              borderBottomWidth={1}
              borderColor="$gray5"
            >
              <XStack alignItems="center" space="$3" flex={1}>
                <Checkbox
                  size="$4"
                  checked={task.done}
                  onCheckedChange={() => toggleTask(task.id)}
                >
                  <Checkbox.Indicator>
                    <Check />
                  </Checkbox.Indicator>
                </Checkbox>

                <Text
                  flex={1}
                  textDecorationLine={task.done ? 'line-through' : 'none'}
                  color={task.done ? '$gray8' : '$color'}
                >
                  {task.title}
                </Text>
              </XStack>

              {!task.done && (
                <Button
                  size="$2"
                  chromeless
                  onPress={() => deleteTask(task.id)}
                >
                  <X size={16} />
                </Button>
              )}
            </XStack>
          ))}

          <XStack alignItems="center" space="$3" paddingTop="$2">
            <Plus />
            <Input
              flex={1}
              placeholder="Add task"
              value={newTask}
              onChangeText={setNewTask}
              onSubmitEditing={addTask}
            />
          </XStack>
        </YStack>
      </YStack>
    </XStack>
  );
}
