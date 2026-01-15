import React, { useState } from 'react';
// Import Vector Icons
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  YStack,
  XStack,
  Text,
  H2,
  Button,
  Separator,
  ScrollView,
  Avatar,
  Switch,
  Checkbox,
  Label,
  Sheet,
  Tabs,
  Input,
  Group,
} from 'tamagui';
import { RootStackParamList } from '../../services/navigation/RootStackParamList';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type Props = NativeStackScreenProps<RootStackParamList, 'TAMAGUI_UI'>;

export default function MobileVectorUI({ route }: Props) {
  const { userEmail, password } = route.params;
  const [showSheet, setShowSheet] = useState(false);
  const [checked, setChecked] = useState(true);
  console.log(password);

  return (
    <ScrollView bg="$background">
      <YStack p="$4" gap="$4">
        {/* PROFILE SECTION */}
        <XStack ai="center" gap="$3">
          <Avatar circular size="$6">
            <Avatar.Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200" />
            <Avatar.Fallback bc="$gray5" jc="center" ai="center">
              <Ionicons name="person" size={24} color="gray" />
            </Avatar.Fallback>
          </Avatar>
          <YStack>
            <Text fontWeight="bold" fontSize="$5">
              {userEmail}
            </Text>
            <XStack ai="center" gap="$1">
              <MaterialIcons name="verified" size={14} color="#3b82f6" />
              <Text color="$gray10">Verified Developer</Text>
            </XStack>
          </YStack>
        </XStack>

        <Separator />

        {/* SEARCH WITH PREFIX ICON */}
        <Group orientation="horizontal" bordered>
          <Group.Item>
            <YStack jc="center" pl="$3">
              <Ionicons name="search" size={20} color="$gray10" />
            </YStack>
          </Group.Item>
          <Group.Item>
            <Input flex={1} borderWidth={0} placeholder="Search settings..." />
          </Group.Item>
        </Group>

        {/* TABS (Segmented Control) */}
        <Tabs
          defaultValue="tab1"
          orientation="horizontal"
          flexDirection="column"
          width="100%"
          borderRadius="$4"
          bw={1}
          bc="$borderColor"
        >
          <Tabs.List bc="$background">
            <Tabs.Tab flex={1} value="tab1" gap="$2">
              <Ionicons name="list" size={18} />
              <Text>General</Text>
            </Tabs.Tab>
            <Tabs.Tab flex={1} value="tab2" gap="$2">
              <Ionicons name="shield-checkmark" size={18} />
              <Text>Privacy</Text>
            </Tabs.Tab>
          </Tabs.List>
          <Tabs.Content value="tab1" p="$3">
            <YStack gap="$3">
              {/* TOGGLE ITEM */}
              <XStack ai="center" jc="space-between">
                <XStack gap="$3" ai="center">
                  <Ionicons name="notifications" size={20} color="$blue10" />
                  <Label>Notifications</Label>
                </XStack>
                <Switch size="$3" defaultChecked>
                  <Switch.Thumb animation="bouncy" />
                </Switch>
              </XStack>

              {/* CHECKBOX ITEM */}
              <XStack ai="center" gap="$3">
                <Checkbox
                  size="$5"
                  checked={checked}
                  onCheckedChange={val => setChecked(!!val)}
                >
                  <Checkbox.Indicator>
                    <Ionicons name="checkmark" size={18} color="green" />
                  </Checkbox.Indicator>
                </Checkbox>
                <Label>Sync with Cloud</Label>
              </XStack>
            </YStack>
          </Tabs.Content>
        </Tabs>

        <Separator />

        {/* ACTION BUTTONS */}
        <YStack gap="$2">
          <Button
            theme="active"
            icon={<Ionicons name="cloud-upload" size={20} color="white" />}
            onPress={() => setShowSheet(true)}
          >
            Upload Document
          </Button>

          <Button
            variant="outlined"
            iconAfter={<Ionicons name="chevron-forward" size={18} />}
          >
            View More Details
          </Button>
        </YStack>

        {/* BOTTOM SHEET */}
        <Sheet
          modal
          open={showSheet}
          onOpenChange={setShowSheet}
          snapPoints={[32]}
          dismissOnSnapToBottom
          animation="medium"
          disableDrag={true}
          moveOnKeyboardChange={true}
          forceRemoveScrollEnabled={true}
        >
          <Sheet.Overlay bg="$shadowColor" o={0.7} />
          <Sheet.Frame p="$4" gap="$4">
            <XStack ai="center" gap="$2">
              <Ionicons name="information-circle" size={24} color="$blue10" />
              <H2>Information</H2>
            </XStack>
            <Text>Select a source to upload your files from your device.</Text>
            <XStack gap="$2">
              <Button f={1} icon={<Ionicons name="camera" size={20} />}>
                Camera
              </Button>
              <Button f={1} icon={<Ionicons name="images" size={20} />}>
                Gallery
              </Button>
            </XStack>
          </Sheet.Frame>
        </Sheet>
      </YStack>
    </ScrollView>
  );
}
