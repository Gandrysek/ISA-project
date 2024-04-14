package test;
 // level- caliber  health- ammo
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.*;

@RequiredArgsConstructor
@Component
public class ApplicationCommand implements CommandLineRunner
{
    private final GunDefaultService gunService;
    private final GunClassDefaultService gunClassService;

    @Override
    public void run(String... args) throws Exception {
        Scanner scanner = new Scanner(System.in);
        String command;
        main_loop:
        while (true)
        {
            String[] allCommands = new String[] {"all_commands", "get_class", "get_guns", "get_gun_class", "create", "delete", "quit"};

            command = scanner.next();
            switch (command)
            {
                case "all_commands" -> {
                    System.out.println(Arrays.toString(allCommands));
                }

                case "get_gunclasses" -> {
                    System.out.println(gunClassService.findAll());
                }

                case "get_guns" -> {
                    System.out.println(gunService.findAll());
                }

                case "get_gun_gunclass" -> {
                    UUID uuid = UUID.fromString(scanner.next());
                    Optional<List<GunClass>> opt =  gunClassService.findAllByGun(uuid);
                    if (opt.isPresent()) {
                        System.out.println(opt.get());
                    } else {
                        System.out.println("No");
                    }
                }

                case "create" -> {
                    String command1 = scanner.next();
                    String command2 = scanner.next();
                    String command3 = scanner.next();
                    String command4 = scanner.next();
                    if(gunService.find(UUID.fromString(command4)).isEmpty())
                    {
                        System.out.println("Not found");
                    }
                    else
                    {
                        GunClass m1 = GunClass.builder().id(UUID.randomUUID()).name(command1).caliber(Integer.parseInt(command2))
                                .ammo(Integer.parseInt(command3)).gun(gunService.find(UUID.fromString(command4)).get()).build();
                        gunClassService.create(m1);
                        System.out.println("Stworzono osobe");
                    }
                }

                case "delete" -> {
                    String command4 = scanner.next();
                    if(gunClassService.find(UUID.fromString(command4)).isEmpty())
                    {
                        System.out.println("Nie znaleziono tego kopyta");
                    }
                    else
                    {
                        gunClassService.delete(UUID.fromString(command4));
                        System.out.println("Usunieto osobe");
                    }
                }

                /*
                case "get_character" -> {
                    UUID uuid = UUID.fromString(scanner.next());
                    try {
                        System.out.println(writer.writeValueAsString(characterController.getCharacter(uuid)));
                    } catch (NoSuchElementException ex) {
                        System.out.println("NOT_FOUND");
                    }
                }
                case "get_character_portrait" -> {
                    UUID uuid = UUID.fromString(scanner.next());
                    try {
                        System.out.println(imageToAnsiArt.apply(characterController.getCharacterPortrait(uuid), 40));
                    } catch (NoSuchElementException ex) {
                        System.out.println("NOT_FOUND");
                    }
                }
                case "delete_character" -> {
                    try {
                        UUID uuid = UUID.fromString(scanner.next());
                        characterController.deleteCharacter(uuid);
                    } catch (NoSuchElementException ex) {
                        System.out.println("Not Found");
                    }
                }
                case "put_character" -> {
                    UUID uuid = UUID.fromString(scanner.next());
                    PutCharacterRequest request = PutCharacterRequest.builder()
                            .name(scanner.next())
                            .profession(UUID.fromString(scanner.next()))
                            .build();
                    try {
                        characterController.putCharacter(uuid, request);
                    } catch (IllegalArgumentException ex) {
                        System.out.println("Bad Request");
                    }
                }
                */
                case "quit" -> {
                    break main_loop;
                }

                default -> {
                    System.out.println("Nie znaleziono polecenie, poszukaj z listy dostepnych");
                }
            }
        }
    }
}